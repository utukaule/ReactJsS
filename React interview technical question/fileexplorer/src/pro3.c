#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>
#include <string.h>

int main(){
    int pipefd[2];
    pit_t pid;
    char buffer[100];

// create pipe
    if(pipe(pipefd) == -1){
        perror("create pipe field");
        return 0;
    }
 
// fork pipe
pid = fork()
if(pid == -1){
    perror("Forking field");
    return 0;
}
else if(pid == 0)
{
    close(pipefd[0]);
    char msg1 = "asdf"
    char msg2 = "asdfasdf"
    char msg3 = "aasdfvsdf"
    write(pipefd[1],msg1,strlen(msg1)+1);
    write(pipefd[1],msg2,strlen(msg2)+1);
    write(pipefd[1],msg3,strlen(msg3)+1);
    close(pipefd[1])
    exit(0);
}else{
    close(pipefd[1]);
    while(read(pipefd[0],buffer,sizeof(buffer))>0){
        printf("received: %s\n",buffer);
    }
    close(pipefd[0])
}
return 0;


}
