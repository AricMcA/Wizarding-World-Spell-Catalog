class SpellSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :lethal
end
