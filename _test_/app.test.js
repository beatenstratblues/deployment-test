const BASE_URL = 'http://localhost:8080'; 

describe("GET /test endpoint", () => {
  it("should return a result", async () => {
    const response = await fetch(`${BASE_URL}/test`);
    const result = await response.text(); 

    expect(response.status).toBe(200); 
    expect(result).toBeTruthy();      
  });
});
