#include <iostream>
using namespace std;

// STRUCTURAL PATTERN
class Singleton
{
private:
    // Không thể khởi tạo đối tượng từ bên ngoài
    Singleton()
    {
        cout << "Singleton created" << endl;
    }
    // Thể hiện duy nhất của class
    static Singleton *instance;

public:
    // Truy xuất instance mọi lúc, mọi nơi
    static Singleton *getInstance()
    {
        if (instance == NULL)
            instance = new Singleton();
        return instance;
    }
}