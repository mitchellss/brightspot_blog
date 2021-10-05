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

    @GetMapping("/blog_post/url_name/{urlName}")
    public Optional<BlogPostModel> getByUrlName(@PathVariable String urlName) {
        Optional<BlogPostModel> blogPost = blogPostRepository.findFirstByUrlName(urlName);
        if (blogPost.isPresent()) {
            log.info("Blog post found");
        } else {
            log.info("Blog post nonexistent");
        }
        return blogPost;
    }

    @GetMapping("/blog_post/latest")
    public List<BlogPostModel> latest() {
        log.info("Getting latest blog post");
        List<BlogPostModel> blogPost = blogPostRepository.findFirst3ByOrderByDatePostedDesc();
        if (blogPost == null) {
            throw new RuntimeException("Post not found");
        }
        return blogPost;
    }

    @PutMapping("/blog_post/{id}")
    public String editBlogPost(@RequestBody BlogPostModel post, @PathVariable String id) {
        log.info("Editing blog post with id " + id);
        Optional<BlogPostModel> optionalBlogPost = blogPostRepository.findById(id);
        if (optionalBlogPost.isPresent()) {
            BlogPostModel blogPost = optionalBlogPost.get();
            log.info("Blog post found");
            blogPost.setId(id);
            if (post.getTitle() != null) { blogPost.setTitle(post.getTitle()); };
            if (post.getSubtitle() != null) { blogPost.setSubtitle(post.getSubtitle()); };
            if (post.getDatePosted() != null) { blogPost.setDatePosted(post.getDatePosted()); };
            if (post.getContent() != null) { blogPost.setContent(post.getContent()); };
            if (post.getAuthor() != null) { blogPost.setAuthor(post.getAuthor()); };
            if (post.getImageUrl() != null) { blogPost.setImageUrl(post.getImageUrl()); };
            if (post.getUrlName() != null) { blogPost.setUrlName(post.getUrlName()); };
            log.info(blogPost.toString());
            blogPostRepository.save(blogPost);
        } else {
            log.info("Blog post not found");
        }
        return optionalBlogPost.toString();
    }

    @DeleteMapping("/blog_post/{id}")
    public String deleteBlogPost(@PathVariable String id) {
        log.info("Deleting blog post with id " + id);
        Optional<BlogPostModel> optionalBlogPost = blogPostRepository.findById(id);
        if (optionalBlogPost.isPresent()) {
            blogPostRepository.deleteById(id);
        }
        return(optionalBlogPost.toString());
    }
}
