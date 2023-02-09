package com.ken.bloggy.service;

import com.ken.bloggy.model.Blog;
import com.ken.bloggy.repository.BlogRepository;
import com.ken.bloggy.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BlogService {
    private BlogRepository blogRepository;
    private UserRepository userRepository;

    @Autowired
    public BlogService(BlogRepository blogRepository, UserRepository userRepository){
        this.blogRepository = blogRepository;
        this.userRepository = userRepository;
    }

    public List<Blog> getAllBlogs(){
        return new ArrayList<>(blogRepository.findAll(Sort.by(Sort.Direction.DESC,"creationTime")));
    }

    public List<Blog> getBlogsByAuthor(String username){
        if(!userRepository.existsByUsername(username)){
            throw new IllegalArgumentException("User with username "+username+" does not exist");
        }
        return blogRepository.findAllByAuthorUsernameOrderByTitle(username);
    }

    public Blog getBlogById(long id){
        if(blogRepository.existsById(id)){
            return blogRepository.findById(id).get();
        }
        throw new IllegalArgumentException("Blog with id "+id+" does not exist.");
    }

    public List<Blog> searchBlogs(String query){
        return blogRepository.findAllByTitleContainingIgnoreCase(query);
    }

    public void addBlog(Blog blog,String username){
        if(!userRepository.existsByUsername(username)){
            throw new IllegalArgumentException("User with username "+username+" does not exist");
        }
        blog.setAuthor(userRepository.findUserByUsername(username).get());
        blog.setCreationTime(System.currentTimeMillis());
        blogRepository.save(blog);
    }

    public void updateBlog(Blog blog, long id){
        if(!blogRepository.existsById(id)){
            throw new IllegalArgumentException("Blog does not exist");
        }
        else{
        blogRepository.save(blog);
        }
    }

    public void deleteBlog(long id){
        blogRepository.deleteById(id);
    }
}
