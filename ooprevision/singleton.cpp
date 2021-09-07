#include <iostream>
using namespace std;
class Singleton
{
private:
    // Để đảm bảo rằng không thể khởi tạo instance từ bên ngoài
    Singleton()
    {
        cout << 'Khoi tao Singleton' << endl;
    }
    // Khởi tạo thể hiện duy nhất của Class
    static Singleton *instance;

public:
    // Giúp truy xuất instance mọi lúc mọi nơi
    static Singleton *getSingletonInstance()
    {
        if (instance == NULL)
        {

            instance = new Singleton();
        }
        return instance;
    }
}