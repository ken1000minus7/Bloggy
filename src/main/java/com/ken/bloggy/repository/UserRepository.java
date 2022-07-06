package com.ken.bloggy.repository;

import com.ken.bloggy.model.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User,Long> {
}
