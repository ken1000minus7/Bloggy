package com.ken.bloggy.service;

import com.ken.bloggy.model.Comment;
import com.ken.bloggy.repository.CommentRepository;
import com.ken.bloggy.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.rmi.activation.ActivationGroupDesc.CommandEnvironment;
import java.util.ArrayList;
import java.util.List;

@Service
public class CommentService {
    private CommentRepository commentRepository;
    private UserRepository userRepository;

    @Autowired
    public CommentService(CommentRepository commentRepository, UserRepository userRepository){
        this.commentRepository = commentRepository;
        this.userRepository = userRepository;
    }

    public List<Comment> getAllComments(){
        return new ArrayList<>(commentRepository.findAll(Sort.by(Sort.Direction.DESC,"creationTime")));
    }


  

    public void addComment(Comment comment,String username){
        if(!userRepository.existsByUsername(username)){
            throw new IllegalArgumentException("User with username "+username+" does not exist");
        }
        comment.setAuthor(userRepository.findUserByUsername(username).get());
        comment.setCreationTime(System.currentTimeMillis());
        commentRepository.save(comment);
    }
}
