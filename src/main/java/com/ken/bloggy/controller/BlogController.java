package com.ken.bloggy.controller;

import com.ken.bloggy.model.Blog;
import com.ken.bloggy.service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
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
    public Blog getBlogById(@PathVariable int id){
        return blogService.getBlogById(id);
    }

    @PostMapping("/blog")
    public void addBlog(@RequestBody Blog blog){
        blogService.addBlog(blog);
    }

    @PutMapping("/blog")
    public void updateBlog(@RequestBody Blog blog){
        blogService.updateBlog(blog);
    }

    @DeleteMapping("/blog/{id}")
    public void deleteBlog(@PathVariable int id){
        blogService.deleteBlog(id);
    }
}
