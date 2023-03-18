package tests;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.fasterxml.jackson.databind.ObjectMapper;

import employeecreator.production.posts.PostsController;
import employeecreator.production.posts.PostsService;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;

import org.springframework.test.web.servlet.setup.MockMvcBuilders;


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

    }}