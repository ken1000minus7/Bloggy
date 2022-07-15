package com.ken.bloggy.controller;

import com.ken.bloggy.model.Blog;
import com.ken.bloggy.service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class BlogController {
    private BlogService blogService;

    @Autowired
    public BlogController(BlogService blogService){
        this.blogService = blogService;
    }

    @GetMapping("/blog")
    public List<Blog> getAllBlogs(){
        return blogService.getAllBlogs();
    }

    @GetMapping("/blog/{id}")
    public Blog getBlogById(@PathVariable long id){
        return blogService.getBlogById(id);
    }

    @GetMapping("/user/{username}/blog")
    public ResponseEntity<?> getBlogsByAuthor(@PathVariable String username){
        try {
            return ResponseEntity.ok(blogService.getBlogsByAuthor(username));
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User does not exist");
        }
    }

    @GetMapping("/search/{query}")
    public List<Blog> searchBlogs(@PathVariable String query){
        return blogService.searchBlogs(query);
    }

    @PostMapping("/user/{username}/blog")
    public ResponseEntity<?> addBlog(@RequestBody Blog blog, @PathVariable String username){
        try {
            blogService.addBlog(blog,username);
        }catch (Exception e){
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User does not exist");
        }
        return ResponseEntity.ok(blogService.getAllBlogs().get(0).getId());
    }

    @PutMapping("/blog")
    public void updateBlog(@RequestBody Blog blog){
        blogService.updateBlog(blog);
    }

    @DeleteMapping("/blog/{id}")
    public void deleteBlog(@PathVariable long id){
        blogService.deleteBlog(id);
    }
}
