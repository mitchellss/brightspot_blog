package us.stephenmitchell.brightspotblog.Model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
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

    public String toString() {
        return "BlogPostModel(id=" + this.getId() + ", title=" + this.getTitle() + ", subtitle=" + this.getSubtitle() + ", datePosted=" + this.getDatePosted() + ")";
    }
}
