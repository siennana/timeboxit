#include <iostream>

class TimeLog {
  private:
    float startTime;
    float endTime;
    float differential;

  public:
    TimeLog(float st, float et, float diff) {
      startTime = st;
      endTime = et;
      differential = diff;
    }
}

class Task {
  private:
    float timeToAlarm;
    TimeLog timeLog[];

  public:
    Task(float _timeToAlarm, TimeLog[] _timeLog) {
      timeToAlarm = _timeToAlarm;
      timeLog = _timeLog;
    }

    void addTimeLog() {}
}
