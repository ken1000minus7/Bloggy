package com.ken.bloggy.repository;

import com.ken.bloggy.model.Blog;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BlogRepository extends JpaRepository<Blog,Long> {

    public List<Blog> findAllByAuthorUsername(String username);
}
