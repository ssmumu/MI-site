import nltk
from nltk.tokenize import word_tokenize

text	= "one two three."
words	= word_tokenize(text)
pos		= nltk.pos_tag(words)

print(text,'\n', words, '\n', pos)