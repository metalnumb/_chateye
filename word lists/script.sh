#!/bin/bash

rm -f output.txt 

while read p; do
  echo $p","$p >> output.txt
done < bad_words.txt