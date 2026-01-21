#include<iostream>
#include<vector>

using namespace std;

struct Problem{
    int answer=0;
    int score=0;
};

int main(){
    vector<Problem> p = {
    };


    vector<Problem> p2025 = {
        {2,5},{1,5},{3,5},  {2,7},{4,7},{2,8},{4,8},
    };
    vector<Problem> p2024 = {
        {3,5},{2,5},{5,5},  {2,7},{4,7},{2,7},{2,7},{3,7}
    };
    vector<Problem> p2023 = {
        {3,5},{4,5},{2,5},  {3,7},{5,7},{4,7},{1,7},{3,7}
    };
    vector<Problem> p2022 = {
        {2,5},{2,5},{3,5},  {3,7},{4,7},{1,7},{1,7},{4,7}
    };
    vector<Problem> p2021_2 = {
        {1,5},{3,5},{2,6},  {5,6},{2,7},{5,7},{3,7},{5,7}
    };
    vector<Problem> p2021_1 = {
        {4,5},{3,5},{1,5},  {1,7},{1,6},{5,6},{3,8},{6,8}
    };
    vector<Problem> p2020 = {
        {3,5},{2,5},{4,5},  {1,6},{3,7},{5,7},{2,7},{5,8}
    };
    vector<Problem> p2019 = {
        {2,5},{4,5},{5,5},  {4,5},{5,7},{3,7},{1,8},{2,8}
    };
    vector<Problem> p2018 = {
        {1,5},{3,5},{5,5},  {3,5},{2,6},{3,8},{4,8},{4,8}
    };
    vector<Problem> p2017 = {
        {3,5},{3,5},{4,5}, {5,5},{2,7},{2,7},{4,8},{1,8}
    };
    vector<Problem> p2016 = {
        {3,5},{5,5},{1,5}, {1,5},{4,7},{4,8},{4,7},{3,8}
    };
    vector<Problem> p2015 = {
        {4,5},{2,5},{1,5}, {5,5},{3,7},{3,9},{4,7},{5,7}
    };
    vector<Problem> p2014 = {
        {5,5},{1,4},{4,5}, {5,5},{3,7},{2,7},{1,8},{4,8}
    };
    vector<Problem> p2013 = {
        {2,5},{4,5},{3,5}, {1,5},{5,7},{4,7},{2,8},{5,8}
    };

    vector<vector<Problem>> problem;
    problem.emplace_back(p2025);
    problem.emplace_back(p2024);
    problem.emplace_back(p2023);
    problem.emplace_back(p2022);
    problem.emplace_back(p2021_2);
    problem.emplace_back(p2021_1);
    problem.emplace_back(p2020);
    problem.emplace_back(p2019);
    problem.emplace_back(p2018);
    problem.emplace_back(p2017);
    problem.emplace_back(p2016);
    problem.emplace_back(p2015);
    problem.emplace_back(p2014);
    problem.emplace_back(p2013);
    
    for(int i=1;i<=6;i++){
        int score = 0;
        for(auto p2:problem){
            int c = 1;
            for(auto p1:p2){
                if(c>3){
                    if(p1.answer==i){
                        score += p1.score;
                    }
                }
                c++;
            }
        }
        cout << score << " ";
    }

    return 0;
}