package us.stephenmitchell.brightspotblog.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

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

    public BlogPostModel(String id, String title, String subtitle, String datePosted, String content) {
        this.id = id;
        this.title = title;
        this.subtitle = subtitle;
        this.datePosted = datePosted;
        this.content = content;
    }

    public BlogPostModel() {
    }

    public String getId() {
        return this.id;
    }

    public String getTitle() {
        return this.title;
    }

    public String getSubtitle() {
        return this.subtitle;
    }

    public String getDatePosted() {
        return this.datePosted;
    }

    public String getContent() {
        return this.content;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setSubtitle(String subtitle) {
        this.subtitle = subtitle;
    }

    public void setDatePosted(String datePosted) {
        this.datePosted = datePosted;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
