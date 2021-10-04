package us.stephenmitchell.brightspotblog.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import us.stephenmitchell.brightspotblog.Model.BlogPostModel;

public interface BlogPostRepository extends MongoRepository<BlogPostModel, String> {

}
