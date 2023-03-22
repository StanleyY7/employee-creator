package tests;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import com.fasterxml.jackson.databind.ObjectMapper;

import employeecreator.production.posts.Post;
import employeecreator.production.posts.PostsController;
import employeecreator.production.posts.PostsService;


@ExtendWith(SpringExtension.class)
public class PostsControllerTests {
    private MockMvc mockMvc;

    @Mock
    private PostsService postsService;

    @InjectMocks
    private PostsController postsController;

    @BeforeEach
    public void setUp() {
        mockMvc = MockMvcBuilders.standaloneSetup(postsController).build();
        new ObjectMapper();
    }
    @Test
    public void testGetStatus() throws Exception {
        mockMvc.perform(get("/posts"))
                .andExpect(status().isOk());

    }
    
    @Test
    void testFindAll() {
      // create some test data
      List<Post> posts = new ArrayList<>();
      posts.add(new Post(1L, "John", "", "Smith", "test@test.com.au", "04123456789", "123 Example Lane, Syndey NSW 2000", "Contract", LocalDate.of(2020, 10, 10), LocalDate.of(2022, 10, 10), false, "Full-time", 40));
      posts.add(new Post(2L, "Joe", "", "Smith", "test@test.com.au", "04123456788", "125 Example Lane, Syndey NSW 2000", "Permanent", LocalDate.of(2020, 10, 10), LocalDate.of(2023, 10, 10), false, "Part-time", 40));

      // mock the service
      PostsService postService = mock(PostsService.class);
      when(postService.findAll()).thenReturn(posts);

      // call the controller method
      PostsController controller = new PostsController(postService);
      ResponseEntity<List<Post>> response = controller.findAll();

      // assert the response
      assertEquals(HttpStatus.OK, response.getStatusCode());
      assertEquals(posts, response.getBody());
    }
}