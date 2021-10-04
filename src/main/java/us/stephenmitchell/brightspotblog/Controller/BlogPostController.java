package us.stephenmitchell.brightspotblog.Controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import us.stephenmitchell.brightspotblog.Model.BlogPostModel;
import us.stephenmitchell.brightspotblog.Repository.BlogPostRepository;

import java.util.List;
import java.util.Optional;

@Slf4j
@RestController
@RequestMapping("/api")
public class BlogPostController {

    @Autowired
    BlogPostRepository blogPostRepository;


    @PostMapping("/blog_post")
    public String postBlogPost(@RequestBody BlogPostModel post) {
        log.info("Saving post");
        blogPostRepository.save(post);
        log.info("Saved post " + post.toString());
        return post.toString();
    }

    @GetMapping("/blog_post")
    public List<BlogPostModel> all() {
        log.info("Getting all posts");
        List<BlogPostModel> blogPosts = blogPostRepository.findAll();
        return blogPosts;
    }

    @GetMapping("/blog_post/{id}")
    public Optional<BlogPostModel> one(@PathVariable String id) {
        log.info("Getting blog post with id " + id);
        Optional<BlogPostModel> blogPost = blogPostRepository.findById(id);
        if (blogPost.isPresent()) {
            log.info("Blog post found");
        } else {
            log.info("Blog post nonexistent");
        }
        return blogPost;
    }
}
