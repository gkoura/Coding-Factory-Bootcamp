word = "Factory"

# for i in range(len(word)):
#     print("#", word[i] * (i + 1))


word = "Factory"
for i in range(len(word)):
    stars = "*" * (7 - (i + 1))  
    partial_word = word[i] * (i + 1)
    print(partial_word + stars)


s = "coding factory"

print (s[0::-1])