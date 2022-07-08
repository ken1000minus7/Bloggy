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
        if(userRepository.existsByUsername(user.getUsername())){
            throw new IllegalArgumentException("User with username "+user.getUsername()+" already exists");
        }
        else if(userRepository.existsByEmail(user.getEmail())){
            throw new IllegalArgumentException("User with email "+user.getEmail()+" already exists");
        }
        userRepository.save(user);
    }

    public User getUser(String username){
        if(!userRepository.existsByUsername(username)){
            throw new IllegalArgumentException("User with username "+username+" does not exist");
        }
        return userRepository.findUserByUsername(username).get();
    }
}
