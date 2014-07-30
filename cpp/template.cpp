#include <iostream>
using namespace std;

template<class T> class Box
{
    T data;
public:
    void set_data(T d){ data=d; }
    T get_data(){ return data; }
};

int main()
{
    Box <int> intger;
    Box <float> number;

    intger.set_data(3);
    number.set_data(1.5);

    cout << intger.get_data() << endl;
    cout << number.get_data() << endl;
}
