package us.stephenmitchell.brightspotblog.Model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.Date;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Document("blog_comments")
public class BlogCommentModel {

    @Id
    private String id;

    @Field("datePosted")
    private Date datePosted;

    @Field("content")
    private String content;

    @Field("author")
    private String author;

    @Field("postId")
    private String postId;

    @Field("parentId")
    private String parentId;

    @Field("level")
    private int level;

}
