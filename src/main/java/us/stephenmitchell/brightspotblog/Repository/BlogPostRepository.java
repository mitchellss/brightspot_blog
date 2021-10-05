package us.stephenmitchell.brightspotblog.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import us.stephenmitchell.brightspotblog.Model.BlogPostModel;

import java.util.List;

public interface BlogPostRepository extends MongoRepository<BlogPostModel, String> {

    BlogPostModel findFirstByOrderByDatePostedDesc();

}
