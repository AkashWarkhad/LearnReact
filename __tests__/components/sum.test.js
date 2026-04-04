import sum from "../../src/components/sum";

test("Sum Function Should Return an Sum Of the Two Numbers", ()=> 
{
    // Arrange & Act
    const result = sum(3, 4);

    // Assert
    expect(result).toBe(7);
});