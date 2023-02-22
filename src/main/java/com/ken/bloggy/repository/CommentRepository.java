package com.ken.bloggy.repository;

import com.ken.bloggy.model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment,Long> {

    public List<Comment> findAllByAuthorUsernameOrderByContent(String username);

    public List<Comment> findAllByContentContainingIgnoreCase(String query);
}
