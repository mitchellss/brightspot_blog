package us.stephenmitchell.brightspotblog;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import us.stephenmitchell.brightspotblog.Repository.BlogPostRepository;

@SpringBootApplication
@EnableMongoRepositories
public class BrightspotblogApplication {

	public static void main(String[] args) {
		SpringApplication.run(BrightspotblogApplication.class, args);
	}

}
