package us.stephenmitchell.brightspotblog.Model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Document("blog_posts")
public class BlogPostModel {

    @Id
    private String id;

    @Field("title")
    private String title;

    @Field("subtitle")
    private String subtitle;

    @Field("datePosted")
    private String datePosted;

    @Field("content")
    private String content;
}
