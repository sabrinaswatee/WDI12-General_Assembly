describe Zombie do

  it 'is invalid without name' do
    zombie = Zombie.new
    expect(zombie).to_not be_valid
  end

  context 'when zombie has a name' do
    let(:zombie) { Zombie.new(name: 'Frank') }

    it 'is invalid without password' do
      expect(zombie).to_not be_valid
    end

    it 'is invalid when password less than 8 characters' do
      zombie.password = '1234567'
      expect(zombie).to_not be_valid
    end
  end

end
