package com.ken.bloggy.controller;

import com.ken.bloggy.model.Comment;
import com.ken.bloggy.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class CommentController {
    private CommentService commentService;

    @Autowired
    public CommentController(CommentService commentService){
        this.commentService = commentService;
    }

    @GetMapping("/comment/blog/{id}")
    public List<Comment> getAllComments(){
        return commentService.getAllComments();
    }


    @PostMapping("/user/{username}/blog/{id}/comment")
    public ResponseEntity<?> addComment(@RequestBody Comment comment, @PathVariable String username){
        try {
            commentService.addComment(comment,username);
        }catch (Exception e){
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User does not exist");
        }
        return ResponseEntity.ok(commentService.getAllComments().get(0).getId());
    }
}
