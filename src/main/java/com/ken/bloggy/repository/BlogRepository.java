package com.ken.bloggy.repository;

import com.ken.bloggy.model.Blog;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface BlogRepository extends CrudRepository<Blog,Integer> {

    public List<Blog> findAllByAuthorId(int authorId);
}
