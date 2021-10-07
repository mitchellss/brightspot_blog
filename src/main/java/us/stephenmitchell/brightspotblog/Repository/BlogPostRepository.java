package us.stephenmitchell.brightspotblog.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import us.stephenmitchell.brightspotblog.Model.BlogPostModel;

import java.util.List;
import java.util.Optional;

public interface BlogPostRepository extends MongoRepository<BlogPostModel, String> {

    List<BlogPostModel> findFirst3ByOrderByDatePostedDesc();

    Optional<BlogPostModel> findFirstByUrlName(String urlName);

}
