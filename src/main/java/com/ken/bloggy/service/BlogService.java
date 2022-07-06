package com.ken.bloggy.service;

import com.ken.bloggy.model.Blog;
import com.ken.bloggy.repository.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BlogService {
    private BlogRepository blogRepository;

    @Autowired
    public BlogService(BlogRepository blogRepository){
        this.blogRepository = blogRepository;
    }

    public List<Blog> getAllBlogs(){
        ArrayList<Blog> blogs = new ArrayList<>();
        blogRepository.findAll().forEach(blogs::add);
        return blogs;
    }

//    public List<Blog> getBlogsByAuthor(long id){
//        return blogRepository.findAllByAuthorId(id);
//    }

    public Blog getBlogById(long id){
        if(blogRepository.existsById(id)){
            return blogRepository.findById(id).get();
        }
        throw new IllegalArgumentException("Blog with id "+id+" does not exist.");
    }

    public void addBlog(Blog blog){
        blogRepository.save(blog);
    }

    public void updateBlog(Blog blog){
        blogRepository.save(blog);
    }

    public void deleteBlog(long id){
        blogRepository.deleteById(id);
    }
}
