package com.ken.bloggy.controller;

import com.ken.bloggy.model.AuthenticationRequest;
import com.ken.bloggy.model.AuthenticationResponse;
import com.ken.bloggy.model.User;
import com.ken.bloggy.service.JwtService;
import com.ken.bloggy.service.UserDetailService;
import com.ken.bloggy.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class UserController {
    private AuthenticationManager authenticationManager;
    private UserDetailService userDetailService;
    private JwtService jwtService;
    private UserService userService;

    @Autowired
    public UserController(AuthenticationManager authenticationManager, UserDetailService userDetailService, JwtService jwtService,UserService userService) {
        this.authenticationManager = authenticationManager;
        this.userDetailService = userDetailService;
        this.jwtService = jwtService;
        this.userService = userService;
    }

    @PostMapping("/authenticate")
    public ResponseEntity<?> authenticate(@RequestBody AuthenticationRequest authenticationRequest){
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(),authenticationRequest.getPassword()));
        }catch (Exception e){
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Incorrect username or password");
        }
        UserDetails userDetails = userDetailService.loadUserByUsername(authenticationRequest.getUsername());
        String token = jwtService.generateToken(userDetails);
        return ResponseEntity.ok(new AuthenticationResponse(token));
    }

    @PostMapping("/user")
    public ResponseEntity<?> addUser(@RequestBody User user) throws Exception {
        try {
            userService.addUser(user);
        }catch (Exception e){
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User already exists");
        }
        UserDetails userDetails = userDetailService.loadUserByUsername(user.getUsername());
        String token = jwtService.generateToken(userDetails);
        return ResponseEntity.ok(new AuthenticationResponse(token));
    }

    @GetMapping("/user/{username}")
    public ResponseEntity<?> getUser(@PathVariable String username){
        try {
            User user = userService.getUser(username);
            return ResponseEntity.ok(user);
        }catch (Exception e){
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User does not exist");
        }
    }
}
