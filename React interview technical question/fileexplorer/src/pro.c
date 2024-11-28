#include <studio.h>
#include <stdlib.h>
#include <unistd.h>
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
        return -1;
    }

    // fork child
    pid = fork();
    if (pid == -1)
    {
        perror("fork failed") return -1;
    }
    else if (pid == 0)
    {
        // child process
        close(pipefd[0]); // close unused read end
        // msg to send
        char *msf1 = "hello";
        char *msf2 = "sppu";
        char *msf3 = "funny";

        write(pipefd[1], msf1, strlen(msg1) + 1);
        write(pipefd[1], msf2, strlen(msg2) + 1);
        write(pipefd[1], msf3, strlen(msg3) + 1);
        close(pipefd[1]);
        exit(0);
    }

    else
    {
        close(pipefd[1]);
        while (read(pipefd[0], buffer, sizeof(buffer)) > 0)
        {
            printf("received: %s\n", buffer);
        }
        close(pipefd[0]);
    }
    return 0;
}