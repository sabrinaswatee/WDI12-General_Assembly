require 'zombie'
# require_relative '../../appa/zombie'

describe Zombie do

  context 'without input' do
    let(:zombie) { Zombie.new }

    it 'is named Frank' do
      # zombie = Zombie.new -- these are made by let(:zombie) { Zombie.new }
      expect(zombie.name).to eq 'Frank'
    end

    it 'has eaten zero brains' do
      # zombie = Zombie.new
      expect(zombie.brains_eaten).to be < 1
    end

    it 'is hungry' do
      # expect(zombie.hungry?).to be_true -- same as line below
      expect(zombie).to be_hungry
    end

    it 'keeps track of brains eaten' do
      expect {zombie.eat}.to change {zombie.brains_eaten}.by(1)
    end
  end

  context 'with input' do
    let(:zombie) { Zombie.new('Albert', 3, false) }

    it 'is named Albert' do
      expect(zombie.name).to eq 'Albert'
    end

    it 'has eaten three brains' do
      expect(zombie.brains_eaten).to eq 3
    end

    it 'is not hungry' do
      expect(zombie).to_not be_hungry
    end
  end

end
