#include <iostream>
using namespace std;

class Something
{
  int datum;
public:
  Something(int x) : datum(x) {
    cout << "Something instance" << datum << " created." << endl;
  }
  void func() const {
    cout << "func is called" <<endl;
  }
  ~Something() {
    cout << "destruction" <<endl;
  }
};

int main()
{
  Something One(1), Two(2);

  One.func();
  Two.func();
}
