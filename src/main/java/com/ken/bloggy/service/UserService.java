package com.ken.bloggy.service;

import com.ken.bloggy.model.User;
import com.ken.bloggy.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    public void addUser(User user) throws Exception{
        if(userRepository.existsByUsername(user.getUsername()) || userRepository.existsByEmail(user.getEmail())){
            throw new Exception("User already exists");
        }
        userRepository.save(user);
    }
}
