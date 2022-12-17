file_data = File.read("input.txt").split("\n")
# p file_data

q = []

class Shape; end
class Rock < Shape; end
class Paper < Shape; end
class Scissors < Shape; end

class Shape
  CLASS_MAP = {
    ["A", "X"] => Rock,
    ["B", "Y"] => Paper,
    ["C", "Z"] => Scissors,
  }
  SCORE = 0
  def self.shape_class(input)
    inputs = CLASS_MAP.keys.find { |key| key.include?(input) }
    CLASS_MAP[inputs]
  end
  def score
    self.class::SCORE
  end
  def <(shape); end
  def >(shape); end
end

class Rock < Shape
  SCORE = 1
  def <(shape)
    shape.class == Paper
  end
  def >(shape)
    shape.class == Scissors
  end
end

class Paper < Shape
  SCORE = 2
  def <(shape)
    shape.class == Scissors
  end
  def >(shape)
    shape.class == Rock
  end
end

class Scissors < Shape
  SCORE = 3
  def <(shape)
    shape.class == Rock
  end
  def >(shape)
    shape.class == Paper
  end
end

class Game
  SCORE_WIN = 6
  SCORE_DRAW = 3
  SCORE_LOSE = 0
  attr :opponent, :me
  def initialize(opponent_input, me_input)
    @opponent = Shape.shape_class(opponent_input).new
    @me = Shape.shape_class(me_input).new
  end
  def score
    (
      opponent < me
        ? SCORE_WIN
        : opponent > me
          ? SCORE_LOSE
          : SCORE_DRAW
    ) + me.score
  end
end

file_data.each do |data|
  game = Game.new(*data.split)
  q.push(game.score)
end

p "sum: #{q.sum}"
