#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>
#include <string.h>

int main()
{

    int pipefd[2];
    pit_t pid;
    char buffer[100];

    // create the pipe
    if (pipe(pipefd) == -1)
    {
        perror("pipe field");
        return 0;
    }

    // fork pipe
    pid = fork();
    if (pid == -1)
    {
        perror('fork field');
        return 0
    }
    else if (pid == 0)
    {
        close(pipefd[0]);
        char msg1 = 'hi';
        char msg2 = 'hiasdf';
        char msg3 = 'hiasdf';
        write(pipefd[1], msg1, strlen(msg1) + 1);
        write(pipefd[1], msg2, strlen(msg2) + 1);
        write(pipefd[1], msg3, strlen(msg3) + 1)
            close(pipefd[1]);
        exit(0);
    }
    else
    {
        close(pipefd[1]);
        write(read(pipefd[0], buffer, sizeof(buffer)) > 0){
            printf("received: %s\n", buffer)} close(pipefd[0])
    }
    return 0;
}