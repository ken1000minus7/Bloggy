package com.ken.bloggy.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.hibernate.annotations.Type;

import javax.persistence.*;

@Entity
public class Comment {
    @Id
    @SequenceGenerator(name = "blog_sequence",sequenceName = "blog_sequence",allocationSize = 1)
    @Column(nullable = false, updatable = false)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "blog_sequence")
    private long id;
    private String title;
    private long replyTo;

    @Lob
    @Basic(fetch = FetchType.LAZY)
    @Type(type = "org.hibernate.type.TextType")
    private String content;

    private long creationTime;

    @ManyToOne
    @JoinColumn(name = "author_id")
    private User author;

    public Comment(String title, String content) {
        this.title = title;
        this.content = content;
        this.replyTo=-1;
    }

    public Comment(){
        this.replyTo=-1;
    }

    public long getId() {
        return id;
    }
    public long getReplyId(){
        return replyTo;
    }
    public void setReplyId( long replyTo){
        this.replyTo=replyTo;
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

    public User getAuthor() {
        return author;
    }

    public void setAuthor(User author) {
        this.author = author;
    }

    public long getCreationTime() {
        return creationTime;
    }

    public void setCreationTime(long createdAt) {
        this.creationTime = createdAt;
    }

}