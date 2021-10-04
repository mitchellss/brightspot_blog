package us.stephenmitchell.brightspotblog.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import us.stephenmitchell.brightspotblog.Model.BlogPostModel;
import us.stephenmitchell.brightspotblog.Repository.BlogPostRepository;

import java.util.Optional;

@RestController
@RequestMapping("/api")
public class BlogPostController {

    @Autowired
    BlogPostRepository blogPostRepository;


    @PostMapping("/blog_post")
    public String postBlogPost(@RequestBody BlogPostModel post) {
        blogPostRepository.save(post);
        return post.toString();
    }

    @GetMapping("/blog_post/{id}")
    public Optional<BlogPostModel> one(@PathVariable String id) {
        Optional<BlogPostModel> blogPost = blogPostRepository.findById(id);

        if (blogPost.isPresent()) {
            System.out.println(blogPost.get().toString());
        } else {
            System.out.println("Query returned null");
        }

        return blogPost;
    }
}
