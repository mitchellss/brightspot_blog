package us.stephenmitchell.brightspotblog.Controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import us.stephenmitchell.brightspotblog.Model.BlogCommentModel;
import us.stephenmitchell.brightspotblog.Model.BlogPostModel;
import us.stephenmitchell.brightspotblog.Repository.BlogCommentRepository;
import us.stephenmitchell.brightspotblog.Repository.BlogPostRepository;

import java.util.List;
import java.util.Optional;

@Slf4j
@RestController
@RequestMapping("/api")
public class BlogCommentController {

    @Autowired
    BlogCommentRepository blogCommentRepository;

    @PostMapping("/blog_comment")
    public String postBlogComment(@RequestBody BlogCommentModel comment) {
        log.info("Saving comment");
        blogCommentRepository.save(comment);
        log.info("Saved comment " + comment.toString());
        return comment.toString();
    }

    @GetMapping("/blog_comment")
    public List<BlogCommentModel> all() {
        log.info("Getting all comments");
        List<BlogCommentModel> blogComments = blogCommentRepository.findAll();
        return blogComments;
    }

    @GetMapping("/blog_comment/{id}")
    public Optional<BlogCommentModel> one(@PathVariable String id) {
        log.info("Getting blog comment with id " + id);
        Optional<BlogCommentModel> blogComment = blogCommentRepository.findById(id);
        if (blogComment.isPresent()) {
            log.info("Blog comment found");
        } else {
            log.info("Blog comment nonexistent");
        }
        return blogComment;
    }

    @GetMapping("/blog_comment/article/{articleId}")
    public List<BlogCommentModel> getAllPostComments(@PathVariable String articleId) {
        log.info("Getting all comments on post with id " + articleId);
        List<BlogCommentModel> blogComments = blogCommentRepository.findByPostId(articleId);
        return blogComments;
    }

    @PutMapping("/blog_comment/{id}")
    public String editBlogComment(@RequestBody BlogCommentModel comment, @PathVariable String id) {
        log.info("Editing blog comment with id " + id);
        Optional<BlogCommentModel> optionalBlogComment = blogCommentRepository.findById(id);
        if (optionalBlogComment.isPresent()) {
            BlogCommentModel blogComment = optionalBlogComment.get();
            log.info("Blog comment found");
            blogComment.setId(id);
            if (comment.getDatePosted() != null) { blogComment.setDatePosted(comment.getDatePosted()); };
            if (comment.getContent() != null) { blogComment.setContent(comment.getContent()); };
            if (comment.getAuthor() != null) { blogComment.setAuthor(comment.getAuthor()); };
            if (comment.getPostId() != null) { blogComment.setPostId(comment.getPostId()); };
            if (comment.getParentId() != null) { blogComment.setParentId(comment.getParentId()); };
            blogComment.setLevel(comment.getLevel());
            log.info(blogComment.toString());
            blogCommentRepository.save(blogComment);
        } else {
            log.info("Blog comment not found");
        }
        return optionalBlogComment.toString();
    }

    @DeleteMapping("/blog_comment/{id}")
    public String deleteBlogComment(@PathVariable String id) {
        log.info("Deleting blog comment with id " + id);
        Optional<BlogCommentModel> optionalBlogComment = blogCommentRepository.findById(id);
        if (optionalBlogComment.isPresent()) {
            blogCommentRepository.deleteById(id);
        }
        return(optionalBlogComment.toString());
    }
}
