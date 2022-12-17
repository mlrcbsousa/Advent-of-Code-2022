file_data = File.read("day1.input").split("\n")
# p file_data

q = []
max = [0, 0, 0]

file_data.each do |data|
  if data == ""
    sum = q.sum
    if sum > max[0]
      max.insert(0, sum)
    elsif sum > max[1]
      max.insert(1, sum)
    elsif sum > max[2]
      max.insert(2, sum)
    end
    max = max.slice(0, 3)
    q = []
  else
    q.push(data.to_i)
  end
end

p max.sum