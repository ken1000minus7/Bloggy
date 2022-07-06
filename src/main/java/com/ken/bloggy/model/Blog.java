package com.ken.bloggy.model;

import javax.persistence.*;

@Entity
public class Blog {
    @Id
    @SequenceGenerator(name = "blog_sequence",sequenceName = "blog_sequence",allocationSize = 1)
    @Column(nullable = false, updatable = false)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "blog_sequence")
    private long id;
    private String title;
    private String content;
//    @ManyToOne
//    private User author;

    public Blog(String title, String content) {
        this.title = title;
        this.content = content;
//        this.author = author;
    }

    public Blog(){

    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

//    public User getAuthor() {
//        return author;
//    }
//
//    public void setAuthor(User author) {
//        this.author = author;
//    }
}
