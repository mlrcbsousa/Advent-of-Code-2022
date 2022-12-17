file_data = File.read("input.txt").split("\n")
# p file_data

q = []

class Shape; end
class Rock < Shape; end
class Paper < Shape; end
class Scissors < Shape; end

class Shape
  CLASS_MAP = {
    A: Rock,
    B: Paper,
    C: Scissors,
  }
  SCORE = 0
  WIN = nil
  LOSE = nil
  def self.create(input)
    CLASS_MAP[input.to_sym].new
  end
  def score
    self.class::SCORE
  end
  def win
    self.class::WIN
  end
  def lose
    self.class::LOSE
  end
  def draw
    self.class
  end
end

class Rock < Shape
  SCORE = 1
  WIN = Paper
  LOSE = Scissors
end

class Paper < Shape
  SCORE = 2
  WIN = Scissors
  LOSE = Rock
end

class Scissors < Shape
  SCORE = 3
  WIN = Rock
  LOSE = Paper
end

class Game

  class Result
    WIN = :Z
    DRAW = :Y
    LOSE = :X
    RESULTS = {
      WIN => 6,
      DRAW => 3,
      LOSE => 0,
    }
    attr :score, :status
    def initialize(input)
      @status = input.to_sym
      @score = RESULTS[status]
    end
    def opposing_shape(player)
      if status == WIN
        player.win
      elsif status == LOSE
        player.lose
      elsif status == DRAW
        player.draw
      end
    end
  end

  attr :me, :result
  def initialize(opponent_input, result_input)
    @result = Result.new(result_input)
    opponent = Shape.create(opponent_input)
    @me = result.opposing_shape(opponent).new
  end
  def score
    result.score + me.score
  end
end

file_data.each do |data|
  game = Game.new(*data.split)
  q.push(game.score)
end

p "sum: #{q.sum}"
