package tests;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.time.LocalDate;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;

import employeecreator.production.EmployeeCreatorApplication;
import employeecreator.production.posts.CreatePostDto;
import employeecreator.production.posts.Post;
import employeecreator.production.posts.PostRepository;
import employeecreator.production.posts.PostsService;

@SpringBootTest(classes=EmployeeCreatorApplication.class)
public class PostsServiceTests {
	
	 	@Mock
	    private PostRepository postRepository;
	    
	    @InjectMocks
	    private PostsService postsService;
	    
	    @BeforeEach
	    public void setup() {
	        MockitoAnnotations.openMocks(this);
	    }
	    
	    @Test
	    public void testCreatePost() {
	        CreatePostDto postDto = new CreatePostDto();
	        postDto.setFirstName("John");
	        postDto.setLastName("Doe");
	        postDto.setEmail("john.doe@example.com");
	        postDto.setPhoneNumber("1234567890");
	        postDto.setAddress("123 Example St, Sydney NSW 2000");
	        postDto.setContractType("Full-time");
	        postDto.setDatesEmployed(LocalDate.of(2021, 1, 1));
	        postDto.setDatesEmployedEnd(LocalDate.of(2021, 12, 31));
	        postDto.setOnGoing(false);
	        postDto.setEmploymentType("Salaried");
	        postDto.setHoursPW(40);

	        

	        when(postRepository.save(Mockito.any(Post.class))).thenAnswer(invocation -> {
	            Post post = invocation.getArgument(0);
	            post.setId(1L); // set the id to simulate the creation of a new post
	            return post;
	        });

	        Post createdPost = postsService.create(postDto);
	        
	        assertThat(createdPost).isNotNull();
	        assertThat(createdPost.getFirstName()).isEqualTo("John");
	        assertThat(createdPost.getLastName()).isEqualTo("Doe");
	        assertThat(createdPost.getEmail()).isEqualTo("john.doe@example.com");
	        assertThat(createdPost.getPhoneNumber()).isEqualTo("1234567890");
	        assertThat(createdPost.getAddress()).isEqualTo("123 Example St, Sydney NSW 2000");
	        assertThat(createdPost.getContractType()).isEqualTo("Full-time");
	        assertThat(createdPost.getDatesEmployed()).isEqualTo(LocalDate.of(2021, 1, 1));
	        assertThat(createdPost.getDatesEmployedEnd()).isEqualTo(LocalDate.of(2021, 12, 31));
	        assertThat(createdPost.getOnGoing()).isEqualTo(false);
	        assertThat(createdPost.getEmploymentType()).isEqualTo("Salaried");
	        assertThat(createdPost.getHoursPW()).isEqualTo(40);
	        
	        verify(postRepository, times(1)).save(createdPost);
	    }
	@Test
	public void testNullPost() {
	    CreatePostDto postDto = new CreatePostDto(); 
	    postDto.setFirstName(null);
	    postDto.setLastName("Smith");
	    postDto.setEmail("john.doe@example.com");
	    postDto.setPhoneNumber("04123456789");
	    postDto.setAddress("123 Example St, Sydney NSW 2000");
	    postDto.setContractType("Contract");
	    postDto.setDatesEmployed(LocalDate.of(2021, 1, 1));
	    postDto.setDatesEmployedEnd(LocalDate.of(2021, 12, 31));
	    postDto.setOnGoing(false);
	    postDto.setEmploymentType("Full-time");
	    postDto.setHoursPW(40);

	    assertThrows(NullPointerException.class, () -> postsService.create(postDto));
	}

}
