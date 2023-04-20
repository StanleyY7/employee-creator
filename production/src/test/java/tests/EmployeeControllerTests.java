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

import employeecreator.production.posts.Employee;
import employeecreator.production.posts.EmployeeController;
import employeecreator.production.posts.EmployeeService;



@ExtendWith(SpringExtension.class)
public class EmployeeControllerTests {
    private MockMvc mockMvc;

    @Mock
    private EmployeeService employeeService;

    @InjectMocks
    private EmployeeController employeeController;

    @BeforeEach
    public void setUp() {
        mockMvc = MockMvcBuilders.standaloneSetup(employeeController).build();
        new ObjectMapper();
    }
    @Test
    public void testGetStatus() throws Exception {
        mockMvc.perform(get("/employees"))
                .andExpect(status().isOk());

    }
    
    @Test
    void testFindAll() {
      // create some test data
      List<Employee> employees = new ArrayList<>();
      employees.add(new Employee(1L, "John", "", "Smith", "test@test.com.au", "04123456789", "123 Example Lane, Syndey NSW 2000", "Contract", LocalDate.of(2020, 10, 10), LocalDate.of(2022, 10, 10), false, "Full-time", 40));
      employees.add(new Employee(2L, "Joe", "", "Smith", "test@test.com.au", "04123456788", "125 Example Lane, Syndey NSW 2000", "Permanent", LocalDate.of(2020, 10, 10), LocalDate.of(2023, 10, 10), false, "Part-time", 40));

      // mock the service
      EmployeeService employeeService = mock(EmployeeService.class);
      when(employeeService.findAll()).thenReturn(employees);

      // call the controller method
      EmployeeController controller = new EmployeeController(employeeService);
      ResponseEntity<List<Employee>> response = controller.findAll();

      // assert the response
      assertEquals(HttpStatus.OK, response.getStatusCode());
      assertEquals(employees, response.getBody());
    }
}