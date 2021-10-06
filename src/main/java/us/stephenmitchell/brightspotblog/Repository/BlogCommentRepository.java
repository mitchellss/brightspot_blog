package us.stephenmitchell.brightspotblog.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import us.stephenmitchell.brightspotblog.Model.BlogCommentModel;

import java.util.List;
import java.util.Optional;

public interface BlogCommentRepository extends MongoRepository<BlogCommentModel, String> {

    List<BlogCommentModel> findByPostId(String postId);

}
