package employeecreator.production.posts;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class PostsService {
	
	@Autowired
	private PostRepository postRepository;

	public Post create(CreatePostDto data) {
		
		String postFirstName = data.getFirstName().trim();
		String postMiddleName = data.getMiddleName();
		String postLastName = data.getLastName().trim();
		String postEmail = data.getEmail().trim();
		String postPhoneNumber = data.getPhoneNumber().trim();
		String postAddress = data.getAddress().trim();
		String postContractType = data.getContractType().trim();
		LocalDate postDatesEmployed = data.getDatesEmployed();
		LocalDate postDatesEmployedEnd = data.getDatesEmployedEnd();
		Boolean postOnGoing = data.getOnGoing();
		String postEmploymentType = data.getEmploymentType().trim();
		Number postHoursPW = data.getHoursPW();
		
		Post newPost = new Post();
		
		newPost.setFirstName(postFirstName);
		newPost.setMiddleName(postMiddleName);
		newPost.setLastName(postLastName);
		newPost.setEmail(postEmail);
		newPost.setPhoneNumber(postPhoneNumber);
		newPost.setAddress(postAddress);
		newPost.setContractType(postContractType);
		newPost.setDatesEmployed(postDatesEmployed);
		newPost.setDatesEmployedEnd(postDatesEmployedEnd);
		newPost.setOnGoing(postOnGoing);
		newPost.setEmploymentType(postEmploymentType);
		newPost.setHoursPW(postHoursPW);
		
		return this.postRepository.save(newPost);
	}

	public List<Post> findAll() {
		return this.postRepository.findAll();
	}

	public Optional<Post> findById(Long id) {
		return this.postRepository.findById(id);
	}

	public void deleteById(Long id) {
		this.postRepository.deleteById(id);
	}
	
	
}
