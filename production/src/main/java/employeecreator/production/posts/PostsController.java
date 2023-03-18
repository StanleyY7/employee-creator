package employeecreator.production.posts;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = "http://127.0.0.1:5173/")
@RequestMapping("/posts")
public class PostsController {
	
	@Autowired
	private PostsService postService;
	
	@PostMapping
	public ResponseEntity<Post> createPost(@Valid @RequestBody CreatePostDto data) {
		Post createdPost = this.postService.create(data);
		return new ResponseEntity<>(createdPost, HttpStatus.CREATED);
	}
	
	@GetMapping
	public ResponseEntity<List<Post>> findAll(){
		List<Post> allPosts = this.postService.findAll();
		return new ResponseEntity<>(allPosts, HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Post> getById(@PathVariable Long id){
		Optional<Post> maybePost = this.postService.findById(id);
		if (maybePost.isEmpty()){
		return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(maybePost.get(), HttpStatus.OK);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Post> deleteById(@PathVariable Long id){
		Optional<Post> maybePost = this.postService.findById(id);
		if (maybePost.isEmpty()){
		return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
		}
		this.postService.deleteById(id);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
}
	

